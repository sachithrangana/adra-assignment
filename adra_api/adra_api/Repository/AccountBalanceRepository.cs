using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using adra_api.Context;
using adra_api.Models;

namespace adra_api.Repository
{
    public class AccountBalanceRepository
    {
        public List<AccountBalanceEntity> getAccountBalanceDetails()
        {
            using (DatabaseContext db = new DatabaseContext())
            {
                return db.accountBalances.ToList<AccountBalanceEntity>();
            }
        }
    }
}