using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using adra_api.Models;

namespace adra_api.Context
{
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<DatabaseContext>
    {
        protected override void Seed(DatabaseContext context)
        {
            base.Seed(context);
            AccountBalanceEntity accountBalance = new AccountBalanceEntity
            {
                rAndD = 5.63,
                canteen = 50000,
                ceoCar = 10000,
                marketing = -600,
                parkingFines = 2000
            };
            context.accountBalances.Add(accountBalance);
            context.SaveChanges();
        }
    }
}