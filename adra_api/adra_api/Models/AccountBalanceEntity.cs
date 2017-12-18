using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace adra_api.Models
{
    public class AccountBalanceEntity
    {
        [Key]
        public int accountBalanceId { get; set; }
        public double rAndD { get; set; }
        public double canteen { get; set; }
        public double ceoCar { get; set; }
        public double marketing { get; set; }
        public double parkingFines { get; set; }
        public DateTime calculateddDate { get; set; }
  
    }
}