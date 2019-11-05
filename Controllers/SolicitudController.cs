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
    public class SolicitudController: ControllerBase
    {
        private readonly PonenciaContext _context;

        public SolicitudController(PonenciaContext context){

            _context = context;
            if (_context.Solicitud.Count() == 0){
                _context.Solicitud.Add(new Solicitud {  NombrePonencia = "Priorizar el proyecto", FechaEntrega = "Priorizar"});
                _context.Solicitud.Add(new Solicitud { NombrePonencia = "Calendario el proyecto", FechaEntrega = "Priorizar"});
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Solicitud>>> GetSolicituds()
        {
            return await _context.Solicitud.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Solicitud>> GetSolicitud(int id)
        {
            var Solicitud = await _context.Solicitud.FindAsync();
            if (Solicitud == null){
                return NotFound();
            }
            return Solicitud;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Solicitud>> PostSolicitud(Solicitud item)
        {
            _context.Solicitud.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSolicitud), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSolicitud(int id, Solicitud item)
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