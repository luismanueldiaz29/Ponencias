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
        public DbSet<Transporte> Transporte {get; set;}
        public DbSet<Programa> Programa {get; set;}
        public DbSet<Investigacion> Investigacion {get; set;}
        public DbSet<GrupoInvestigacion> GrupoInvestigacion {get; set;}

    }
}