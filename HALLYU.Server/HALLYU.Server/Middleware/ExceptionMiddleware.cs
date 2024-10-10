using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;

namespace HALLYU.Server.Middleware
{
    public class ExceptionMiddleware : IMiddleware
    {
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(ILogger<ExceptionMiddleware> logger)
        {
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception e)
            {
                _logger.LogError(e, e.Message);

                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;

                ProblemDetails problem = new()
                {
                    Status = (int)HttpStatusCode.BadRequest,
                    Type = "Server error",
                    Title = "Server error",
                    Detail = "An internal server error"
                };

                string json = JsonSerializer.Serialize(problem);

                await context.Response.WriteAsync(json);

                context.Response.ContentType = "application/json";
            }
        }
    }
}
