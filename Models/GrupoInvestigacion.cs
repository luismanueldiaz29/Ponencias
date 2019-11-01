using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class GrupoInvestigacion
    {
        [JsonProperty("grupoId")]
        public int grupoId { get; set; }

        [JsonProperty("NombreGrupo")]
        public string NombreGrupo { get; set; }

        //   un grupo de investigacion es guado por uno o varios docentes
        [JsonProperty("DocenteId")]
        public int DocenteId { get; set; }

        [JsonProperty("Docente")]
        public Docente Docente { get; set; }


    }
}