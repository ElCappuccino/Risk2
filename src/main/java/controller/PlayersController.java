package controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import beans.PlayerBean;

@RestController
@RequestMapping(value="/api")
public class PlayersController {

    @RequestMapping(value="/player-list", method=RequestMethod.GET)
    public PlayerBean getPlayers(){
    	// TEST
        return new PlayerBean("Paul", 2);
    }
}
