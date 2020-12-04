using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz.Backend.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly QuizContext _context = null;

        public QuestionController(QuizContext context)
        {
            _context = context;
        }
        public Question Question { get; set; }
        [HttpPost]
        public async Task<IActionResult>  Post([FromBody] Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return Ok(question);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Question question)
        {
            if(id != question.Id)
            {
                return BadRequest();
            }
            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(question);
        }
        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return _context.Questions;
        }
    }
}
