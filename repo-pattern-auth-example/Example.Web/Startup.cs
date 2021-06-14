using Example.Core;
using Example.Core.Infrastructure.Filters;
using Example.Core.Security;
using Example.Core.Service;
using Example.Domain.Model.Role;
using Example.Domain.Model.User;
using Example.Web.Config.Mapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;

namespace Example.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IUserStore<UserModel>, UserStore>();
            services.AddTransient<IRoleStore<RoleModel>, RoleStore>();

            services.AddIdentity<UserModel, RoleModel>(options => {
                options.Password.RequireDigit = true;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
            })
            .AddDefaultTokenProviders();

            services.AddScoped<IUserClaimsPrincipalFactory<UserModel>, UserClaimsPrincipalFactory>();


            string connectionString = Configuration.GetConnectionString("LOCAL_DEVELOPMENT");
            var serviceContext = new ServiceContext(connectionString);
            ExampleAppContext.Current = new ExampleAppContext(serviceContext);

            MapperConfig.InitAutomapper();


            services.AddAuthentication();
            services.AddAuthorization();

            services.AddControllersWithViews()
                .AddRazorRuntimeCompilation();

            services.AddCors();

            services.AddRazorPages();


            services.AddControllers(config => {
                config.Filters.Add(typeof(HandleException));
            })
            .AddJsonOptions(option => {
                option.JsonSerializerOptions.PropertyNamingPolicy = null;
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            else {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            // Render only .js files in "Pages" folder
            app.UseStaticFiles(new StaticFileOptions() {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), @"Pages")
                ),
                RequestPath = new PathString("/Pages"),
                ContentTypeProvider = new FileExtensionContentTypeProvider(
                    new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
                    {
                        { ".js", "application/javascript" },
                    }
                )
            });


            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
                endpoints.MapRazorPages();

            });
        }
    }
}
