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
    public class EventoController: ControllerBase
    {
        private readonly PonenciaContext _context;

        public EventoController(PonenciaContext context){

            _context = context;
            // if (_context.Evento.Count() == 0){
            //     _context.Evento.Add(new Evento { Id = 1, Nombres = "Priorizar el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Evento", Email = "luis@gmail.com", direccion = "calle cuba", FacultadId = 1});
            //     _context.Evento.Add(new Evento { Id = 2, Nombres = "Calendario el proyecto", Apellidos = "Priorizar", Telefono = "101291212", VinculoInst = "Evento", Email = "luis@gmail.com", direccion = "calle cuba", FacultadId = 1});
            //     _context.SaveChanges();
            // }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Evento>>> GetEventos()
        {
            return await _context.Evento.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Evento>> GetEvento(int id)
        {
            var evento = await _context.Evento.FindAsync();
            if (evento == null){
                return NotFound();
            }
            return evento;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Evento>> PostEvento(Evento item)
        {
            _context.Evento.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEvento), new { id = item.Id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvento(int id, Evento item)
        {
            if (id != item.Id)
            {
            return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
    
}