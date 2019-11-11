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
    public class DocenteController: ControllerBase
    {
        private readonly PonenciaContext _context;

        public DocenteController(PonenciaContext context){

            _context = context;
            if (_context.Docente.Count() == 0){
                _context.Docente.Add(new Docente { Identificacion = 1,  Nombres = "Carlos ", Apellidos = "Daza", Telefono = "101291212", VinculoInst = "docente", Email = "luis@gmail.com", direccion = "calle linda"});
                _context.Docente.Add(new Docente {  Identificacion = 2, Nombres = "Luis Manué", Apellidos = "Diaz", Telefono = "101291212", VinculoInst = "docente", Email = "luis@gmail.com", direccion = "calle cuba"});
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Docente>>> GetDocentes()
        {
            return await _context.Docente.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetDocente(int id)
        {
            var docente = await _context.Docente.FindAsync(id);
            if (docente == null){
                return NotFound();
            }
            return docente;
        }

        [ProducesResponseType(201)]     // Created
        [ProducesResponseType(400)]     // BadRequest
        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Docente>> Post(Docente item)
        {
            _context.Docente.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDocente), new { id = item.id }, item);
        }

         // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Docente item)
        {
            if (id != item.id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

                        // DELETE: api/Task/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var docente = await _context.Docente.FindAsync(id);

            if (docente == null)
            {
                return NotFound();
            }

            _context.Docente.Remove(docente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}