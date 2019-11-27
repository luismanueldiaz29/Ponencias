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
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Programa>>> GetPrograma()
        {
            return await _context.Programa.ToListAsync();
        }

        // GET: api/Programa/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Programa>> GetPrograma(int id)
        {
            var programa = await _context.Programa.FindAsync(id);
            if (programa == null){
                return NotFound();
            }
            return programa;
        }

        [ProducesResponseType(201)]     // Created
        [ProducesResponseType(400)]     // BadRequest
        // POST: api/Programa
        [HttpPost]
        public async Task<ActionResult<Programa>> Post(Programa item)
        {
           
           
            _context.Programa.Add(item); 
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPrograma), new { id = item.id }, item);
        }

         // PUT: api/Programa/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Programa item)
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
            var programa = await _context.Programa.FindAsync(id);

            if (programa == null)
            {
                return NotFound();
            }

            _context.Programa.Remove(programa);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}