using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Routing;

namespace ToDoListAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var cors = new EnableCorsAttribute(
               origins: "https://todolistangular000.azurewebsites.net",
               headers: "*",
               methods: "*");
            cors.SupportsCredentials = true;
            config.EnableCors(cors);


            //config.SuppressDefaultHostAuthentication();
            //config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            //var constraints = new { httpMethod = new HttpMethodConstraint(HttpMethod.Options) };
            //config.Routes.IgnoreRoute("OPTIONS", "*pathInfo", constraints);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
