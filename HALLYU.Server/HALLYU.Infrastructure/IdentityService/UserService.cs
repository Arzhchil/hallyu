﻿using HALLYU.Application.DTOs.Permissions;
using HALLYU.Application.DTOs.UserDTO;
using HALLYU.Domain.Entities;
using HALLYU.Domain.Enums;
using HALLYU.Infrastructure.Context;
using HALLYU.Infrastructure.IdentityService.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;

namespace HALLYU.Infrastructure.IdentityService
{
    public class UserService : IUserService
    {
        private readonly HallyuContext hallyuContext;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IJwtProvider _jwtProvider;

        public UserService(HallyuContext _hallyuContext,
            IPasswordHasher passwordHasher,
            IJwtProvider Jwtprovider)
        {
            hallyuContext = _hallyuContext;
            _passwordHasher = passwordHasher;
            _jwtProvider = Jwtprovider;
        }

        public async Task AddUser(RegisterUserDTO registerUserDTO)
        {
            using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
            {
                var roles = hallyuContext.Roles.SingleOrDefault(r => r.Id == (int)Role.User) ??
                    throw new InvalidOperationException();

                int id = hallyuContext.Users.OrderByDescending(x => x.Id).Select(x => x.Id).FirstOrDefault() + 1;
                string hashedPassword = _passwordHasher.Generate(registerUserDTO.Passhowd);
                User user = new User()
                {
                    Id = id,
                    BirthDate = registerUserDTO.BirthDate,
                    LastName = registerUserDTO.LastName,
                    Mail = registerUserDTO.Mail,
                    MiddleName = registerUserDTO.MiddleName,
                    Name = registerUserDTO.Name,
                    Phone = registerUserDTO.Phone,
                    RegDate = registerUserDTO.RegDate,
                    Sex = registerUserDTO.Sex,
                    Roles = [roles]
                };
                hallyuContext.Users.Add(user);

                UserDataIdentity userDataIdentity = new UserDataIdentity()
                {
                    PasswordHash = hashedPassword,
                    UserId = id
                };
                hallyuContext.UserDataIdentities.Add(userDataIdentity);

                await hallyuContext.SaveChangesAsync();
                scope.Complete();
            }
        }

        public async Task<HashSet<Permission>> GetUserPermissions(int userId)
        {
            var roles = await hallyuContext.Users
                .AsNoTracking()
                .Include(r => r.Roles)
                .ThenInclude(p => p.Permissions)
                .Where(r => r.Id == userId)
                .Select(r => r.Roles)
                .ToListAsync();

            return roles.SelectMany(r => r)
                .SelectMany(r => r.Permissions)
                .Select(p => (Permission)p.Id)
                .ToHashSet();
        }

        public async Task<string> Login(string email, string password)
        {
            User user = hallyuContext.Users.Where(x => x.Mail == email).Include(x => x.UserDataIdentity).FirstOrDefault();

            if (user is null)
            {
                throw new System.Exception("Пользователь с таким email не найден");
            }

            var verifyResult = _passwordHasher.Verify(password, user.UserDataIdentity.PasswordHash);

            if (!verifyResult)
            {
                throw new System.Exception($"Не удалось войти, проверьте верность введенных данных");
            }

            string token = _jwtProvider.GenerateToken(user);

            return token;
        }


    }
}