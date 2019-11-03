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
    public class InvestigacionController: ControllerBase
    {
        
        private readonly PonenciaContext _context;

        public InvestigacionController(PonenciaContext context){

            _context = context;
            // if (_context.Investigacion.Count() == 0){
            //     _context.Investigacion.Add(new Investigacion { id = 1, Nombres = "Priorizar el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Investigacion", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.Investigacion.Add(new Investigacion { id = 2, Nombres = "Calendario el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Investigacion", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.SaveChanges();
            // }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Investigacion>>> GetInvestigacions()
        {
            return await _context.Investigacion.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Investigacion>> GetInvestigacion(int id)
        {
            var investigacion = await _context.Investigacion.FindAsync();
            if (investigacion == null){
                return NotFound();
            }
            return investigacion;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Investigacion>> PostInvestigacion(Investigacion item)
        {
            _context.Investigacion.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetInvestigacion), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvestigacion(int id, Investigacion item)
        {
            if (id != item.id)
            {
            return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}