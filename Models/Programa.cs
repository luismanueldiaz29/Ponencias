namespace Ponencias.Models
{
    public class Programa
    {
        [JsonProperty("ProgramaId")]
        public int ProgramaId { get; set; }

        [JsonProperty("NombrePrograma")]
        public string NombrePrograma { get; set; }
        
        //  un programa puede pertenecer a una facultad
        [JsonProperty("FacultadId")]
        public int FacultadId {get; set;}

        [JsonProperty("Facultad")]
        public Facultad Facultad {get; set;}

    }
}