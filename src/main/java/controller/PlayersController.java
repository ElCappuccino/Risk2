package controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import beans.RuleBean;

@RestController
@RequestMapping(value="/api")
public class PlayersController {

    @RequestMapping(value="/players", method=RequestMethod.GET)
    public RuleBean getPlayers(){
    	// TEST
        return new RuleBean(4, 2, 0, 1);
    }
}
