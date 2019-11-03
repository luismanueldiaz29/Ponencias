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
    public class SemilleroController: ControllerBase
    {
        private readonly PonenciaContext _context;

        public SemilleroController(PonenciaContext context){

            _context = context;
            // if (_context.Semillero.Count() == 0){
            //     _context.Semillero.Add(new Semillero { id = 1, Nombres = "Priorizar el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Semillero", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.Semillero.Add(new Semillero { id = 2, Nombres = "Calendario el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Semillero", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.SaveChanges();
            // }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Semillero>>> GetSemilleros()
        {
            return await _context.Semillero.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Semillero>> GetSemillero(int id)
        {
            var semillero = await _context.Semillero.FindAsync();
            if (semillero == null){
                return NotFound();
            }
            return semillero;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Semillero>> PostSemillero(Semillero item)
        {
            _context.Semillero.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSemillero), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSemillero(int id, Semillero item)
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