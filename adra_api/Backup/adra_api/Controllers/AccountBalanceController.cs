using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using adra_api.Context;  
using System.Web.Http;
using adra_api.Repository;

namespace adra_api.Controllers
{
    public class AccountBalanceController : ApiController
    {
        //Creating Database Instance  
        private DatabaseContext db = new DatabaseContext();
        private AccountBalanceRepository accountBalanceRepository = new AccountBalanceRepository();

        //Creating a method to return Json data   
        [HttpGet]  
        public IHttpActionResult Get()  
        {
            try  
            {
                //Prepare data to be returned using Linq as follows  
                var result = accountBalanceRepository.getAccountBalanceDetails();
                return Ok(result);  
            }  
            catch (Exception)  
            {  
                
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();  
            }  
        } 
    }
}
