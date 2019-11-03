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
    public class ProgramaController: ControllerBase
    {
        
        private readonly PonenciaContext _context;

        public ProgramaController(PonenciaContext context){

            _context = context;
            // if (_context.Programa.Count() == 0){
            //     _context.Programa.Add(new Programa { id = 1, Nombres = "Priorizar el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Programa", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.Programa.Add(new Programa { id = 2, Nombres = "Calendario el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Programa", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.SaveChanges();
            // }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Programa>>> GetProgramas()
        {
            return await _context.Programa.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Programa>> GetPrograma(int id)
        {
            var programa = await _context.Programa.FindAsync();
            if (programa == null){
                return NotFound();
            }
            return programa;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Programa>> PostPrograma(Programa item)
        {
            _context.Programa.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPrograma), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrograma(int id, Programa item)
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