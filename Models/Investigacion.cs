using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class Investigacion
    {
        [JsonProperty("id")]
        public int id {get; set;}

        [JsonProperty("NombreInvestigacion")]
        public string NombreInvestigacion {get; set;}

        //  en una investigacion pertenece un grupo de investigacion
        [JsonProperty("GrupoId")]
        public string GrupoId {get; set;}

        [JsonProperty("GrupoInvestigacion")]
        public string GrupoInvestigacion {get; set;}
        
    }
}