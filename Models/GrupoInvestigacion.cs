using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class GrupoInvestigacion
    {
        [JsonProperty("id")]
        public int id { get; set; }

        [JsonProperty("NombreGrupo")]
        public string NombreGrupo { get; set; }

        //   un grupo de investigacion es guiado por uno o varios docentes
        [JsonProperty("DocenteId")]
        public int DocenteId { get; set; }

        [JsonProperty("Docente")]
        public Docente Docente { get; set; }
        
        //   un grupo de Investigacion tiene una investigacion
        [JsonProperty("InvestigacionId")]
        public int InvestigacionId { get; set; }

        [JsonProperty("Investigacion")]
        public Investigacion Investigacion { get; set; }
        
        //  un grupo de investigacion se compone de un semillero
        [JsonProperty("SemilleroId")]
        public int SemilleroId { get; set; }

        [JsonProperty("Semillero")]
        public Semillero Semillero { get; set; }
    }
}