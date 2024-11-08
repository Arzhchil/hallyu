﻿using HALLYU.Infrastructure.Context;
using HALLYU.Infrastructure.IdentityService.Interface;
using HALLYU.Infrastructure.IdentityService;
using HALLYU.Server.Handlers.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using HALLYU.Server.Middleware;
using HALLYU.Infrastructure.MailService.MailModels;
using HALLYU.Infrastructure.MailService;
using HALLYU.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace HALLYU.Server.Extension
{
    public static class ConfigureService
    {
        public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMediatR(configuration =>
            {
                configuration.RegisterServicesFromAssembly(typeof(Program).Assembly);
            });

            services.AddDbContext<HallyuContext>(op =>
            {
                op.UseNpgsql(configuration.GetConnectionString("Postgres"));
            });

            services.Configure<JwtOptions>(configuration.GetSection("JwtOptions"));
            services.Configure<HALLYU.Domain.AuthorizationOptions>(configuration.GetSection("AuthorizationOptions"));
            services.AddSingleton(configuration.GetSection("EmailConfiguration").Get<EmailConfiguration>());
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IPasswordHasher, PasswordHasher>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IJwtProvider, JwtProvider>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<ExceptionMiddleware>();
            services.AddSingleton<IAuthorizationHandler, PermissionAuthorizationHandler>();
            services.AddScoped<IPermissionService, PermissionService>();
        }
    }
}
