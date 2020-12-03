using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Backend.API.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }
        public string CorrectAnswer { get; set; }

        [NotMapped]
        public List<string> WrongAnswers { get; set; }
        
        public string WrongAnswersString { get; set; }
    }
}
