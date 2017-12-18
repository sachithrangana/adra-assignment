using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http;
using adra_api.Context;

namespace adra_api
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            System.Data.Entity.Database.SetInitializer(new DatabaseInitializer()); 
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
