using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Frontend_Training.Models;

namespace Frontend_Training.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            List<GameInstance> linksToImages = new List<GameInstance>
            {
                new GameInstance {link= "/images/Logos/dota-2-logo.png", companyName= "Valve", gameName= "Dota2" },
                new GameInstance{link= "/images/Logos/League-of-legends-logo.png", companyName= "Riot Games", gameName= "League of Legends" },
                new GameInstance{link= "/images/Logos/ClashofClans_Title.png", companyName= "Valve", gameName= "Clash of Clans" },
                new GameInstance{link= "/images/Logos/Clash-royal-logo.png", companyName= "Valve", gameName= "Clash Royale" },
                new GameInstance{link= "/images/Logos/Heroes_of_the_Storm_logo_2017.png", companyName= "Blizzard Entertainment", gameName= "Heroes of the Storm" },
                new GameInstance{link= "/images/Logos/pubg_PNG33.png", companyName= "Valve", gameName= "Player Unknown's Battleground" },
                new GameInstance{link= "/images/Logos/smite-logo-hzcom1.png", companyName= "HZCom", gameName= "Smite" },
                new GameInstance{link= "/images/Logos/Strife_Logo.jpg", companyName= "Valve", gameName= "Strife" }

            };


            return View(linksToImages);
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
