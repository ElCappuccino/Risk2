package controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import beans.PlayerBean;
import repository.PlayerRepository;

@RestController
@RequestMapping(value="/api")
public class PlayersController {
    @Resource
    private PlayerRepository playerRepository;

    @RequestMapping(value="/players", method=RequestMethod.GET)
    public List<PlayerBean> getAllPlayers(){
    	List<PlayerBean> players = playerRepository.getAll();
    	return players;
    }
    
    @RequestMapping(value="/player/{id}", method=RequestMethod.GET)
    public PlayerBean getBook(@PathVariable Long id){
        return playerRepository.get(id);
    }
}
