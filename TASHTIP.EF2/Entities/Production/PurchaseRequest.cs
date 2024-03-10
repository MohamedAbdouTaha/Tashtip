﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TASHTIP.EF.Entities.Production
{
    public  class PurchaseRequest : UserInfo 
    {
        [Key]
        public int ID_PR { get; set; }
        public string? RequestDate { get; set; } 
        public int? BussinessGallaryID { get; set; } 
        public string? CutomerName { get; set; }
        public string? Address { get; set; }
        public string? Job { get; set; }
        public int? Mobile { get; set; }
        public int? Age { get; set; }
        public string? Email { get; set; }
        public string? Engineer { get; set; }
        public string? Rating { get; set; }
        public string? PayTerms { get; set; }
        public string? Notes { get; set; }
        public string? Status { get; set; }
    }
}
