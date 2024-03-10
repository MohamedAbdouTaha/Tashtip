using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TASHTIP.RepoUOWCore.Class
{
    public enum NotificationType
    {
        error,
        success,
        warning,
        info
    }

    public abstract class BaseController : Controller
    {
        public void Alert(string message, NotificationType notificationType)
        {
            var msg = "Swal.fire('" + notificationType.ToString().ToUpper() + "', '" + message + "','" + notificationType + "')" + "";
            TempData["notification"] = msg;
        }
         
         
    }

  
}
