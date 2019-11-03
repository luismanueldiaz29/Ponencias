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
    public class FacultadController: ControllerBase
    {
        private readonly PonenciaContext _context;

        public FacultadController(PonenciaContext context){

            _context = context;
            // if (_context.Facultad.Count() == 0){
            //     _context.Facultad.Add(new Facultad { id = 1, Nombres = "Priorizar el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Facultad", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.Facultad.Add(new Facultad { id = 2, Nombres = "Calendario el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Facultad", Email = "luis@gmail.com", direccion = "calle cuba", Facultadid = 1});
            //     _context.SaveChanges();
            // }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Facultad>>> GetFacultades()
        {
            return await _context.Facultad.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Facultad>> GetFacultad(int id)
        {
            var facultad = await _context.Facultad.FindAsync();
            if (facultad == null){
                return NotFound();
            }
            return facultad;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Facultad>> PostFacultad(Facultad item)
        {
            _context.Facultad.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFacultad), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFacultad(int id, Facultad item)
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