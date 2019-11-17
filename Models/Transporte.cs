using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Ponencias.Models
{
    public class Transporte
    {
      [JsonProperty("id")]
      [Required]
      public int id {get; set;}

    //  [JsonProperty("SolicitudId")]
      //[Required]
      //public int id {get; set;}

      [JsonProperty("TipoTransporte")]
      [Required]
      public string TipoTransporte {get; set;}

      [JsonProperty("ValorTrasporte")]
      [Required]
      public decimal ValorTrasporte {get; set;}
        
    }
}