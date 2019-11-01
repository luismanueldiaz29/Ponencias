using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class Investigacion
    {
        [JsonProperty("InvestigacionId")]
        public int InvestigacionId {get; set;}

        [JsonProperty("NombreInvestigacion")]
        public string NombreInvestigacion {get; set;}

        //  en una investigacion pertenece un grupo de investigacion
        [JsonProperty("GrupoInvestId")]
        public string GrupoInvesId {get; set;}

        [JsonProperty("GrupoInvestigacion")]
        public string GrupoInvestigacion {get; set;}
        
    }
}