using System.Data.Entity;
using adra_api.Models;

namespace adra_api.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext() : base("AdraDBConnection") { }

        public DbSet<AccountBalanceEntity> accountBalances { get; set; }
    }
}