using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Ponencias.Models;
using Microsoft.EntityFrameworkCore;

namespace Ponencias.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticacionController: ControllerBase
    {
        private readonly PonenciaContext _context;

        public AutenticacionController(PonenciaContext context){

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Docente>>> GetDocentes()
        {
            return await _context.Docente.ToListAsync();
        }

        // GET: api/Task/5
        // [HttpPost]
        // public async Task<ActionResult<LoginInputModel>> Autenticacion(LoginInputModel loginInputModel){
            
        // } 

    }

    public class LoginInputModel{

        public string Usuario {get; set;}
        public string Password {get; set;}
    
    }
}