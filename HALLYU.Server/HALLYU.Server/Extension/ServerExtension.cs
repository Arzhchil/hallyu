using HALLYU.Application.Requirements;
using HALLYU.Domain.Enums;
using HALLYU.Infrastructure.IdentityService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace HALLYU.Server.Extension
{
    public static class ServerExtension
    {
        public static void AddServerExtension(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            var jwtOptions = configuration.GetSection("JwtOptions").Get<JwtOptions>();

            services.AddAuthentication(options => { 
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, opt => 
                {
                    opt.RequireHttpsMetadata = true;
                    opt.SaveToken = true;

                    opt.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions!.SecretKey))
                    };

                    opt.Events = new JwtBearerEvents()
                    {
                        OnMessageReceived = context => 
                        {
                            context.Token = context.Request.Cookies["HALLYU"];

                            return Task.CompletedTask;
                        }
                    };
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("Read", policy => 
                    policy.Requirements.Add(new PermissionRequirement([Permission.Read])));

                options.AddPolicy("Delete", policy => 
                    policy.Requirements.Add(new PermissionRequirement([Permission.Delete])));

                options.AddPolicy("Update", policy => 
                    policy.Requirements.Add(new PermissionRequirement([Permission.Update])));

                options.AddPolicy("Create", policy => 
                    policy.Requirements.Add(new PermissionRequirement([Permission.Create])));

                options.AddPolicy("Admin", policy =>
                    policy.Requirements.Add(new PermissionRequirement([Permission.Delete,
                        Permission.Create,
                        Permission.Update,
                        Permission.Read])));

                options.AddPolicy("Employee", policy => 
                    policy.Requirements.Add(new PermissionRequirement([Permission.Create,
                        Permission.Update,
                        Permission.Read])));
            });
        }
    }
}
