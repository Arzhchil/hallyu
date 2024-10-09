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
                options.AddPolicy("PermissionPolicy", policy => policy.Requirements.Add(new PermissionRequirement()));
                options.AddPolicy("Delete", policy => policy.Requirements.Add(new PermissionRequirement(Permission.Delete)));
            });
        }

        public static IEndpointConventionBuilder RequiredPermissions<TBuilder>(this TBuilder builder,
            params Permission[] permissions) where TBuilder : IEndpointConventionBuilder
        {
            return builder.RequireAuthorization(
                policy => policy.AddRequirements(new PermissionRequirement(permissions))
                );
        }
    }
}
