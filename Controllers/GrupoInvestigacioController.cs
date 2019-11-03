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
    public class GrupoInvestigacioController: ControllerBase
    {
        private readonly PonenciaContext _context;

        public GrupoInvestigacioController(PonenciaContext context){

            _context = context;
            // if (_context.GrupoInvestigacion.Count() == 0){
            //     _context.GrupoInvestigacion.Add(new GrupoInvestigacion { id = 1, Nombres = "Priorizar el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "GrupoInvestigacion", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.GrupoInvestigacion.Add(new GrupoInvestigacion { id = 2, Nombres = "Calendario el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "GrupoInvestigacion", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.SaveChanges();
            // }
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<GrupoInvestigacion>>> GetGrupoInvestigacions()
        {
            return await _context.GrupoInvestigacion.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GrupoInvestigacion>> GetGrupoInvestigacion(int id)
        {
            var grupo = await _context.GrupoInvestigacion.FindAsync();
            if (grupo == null){
                return NotFound();
            }
            return grupo;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<GrupoInvestigacion>> PostGrupoInvestigacion(GrupoInvestigacion item)
        {
            _context.GrupoInvestigacion.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetGrupoInvestigacion), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrupoInvestigacion(int id, GrupoInvestigacion item)
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