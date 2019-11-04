using Microsoft.EntityFrameworkCore;

namespace Ponencias.Models
{
    public class PonenciaContext : DbContext
    {
        public PonenciaContext(DbContextOptions<PonenciaContext> options) :base(options){}

        public DbSet<Docente> Docente { get; set; }
        public DbSet<Solicitud> Solicitud { get; set; }
        public DbSet<Evento> Evento { get; set; }
        public DbSet<Estudiante> Estudiante { get; set; }
    }
}