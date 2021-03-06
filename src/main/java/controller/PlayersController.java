package controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import beans.PlayerBean;
import repository.PlayerRepository;

@RestController
public class PlayersController {
    @Resource
    private PlayerRepository playerRepository;

    @RequestMapping(value="/players", method=RequestMethod.GET)
    public List<PlayerBean> getAllPlayers(){
    	List<PlayerBean> players = playerRepository.getAll();
    	return players;
    }
    
    @RequestMapping(value="/players/{id}", method=RequestMethod.GET)
    public PlayerBean getPlayer(@PathVariable Long id){
        return playerRepository.get(id);
    }
    
    @RequestMapping(value="/players/{id}", method=RequestMethod.DELETE)
    public void deletePlayer(@PathVariable Long id){
        playerRepository.delete(id);
    }
    
    @RequestMapping(value="/players", method=RequestMethod.POST)
    public PlayerBean createPlayer(@RequestBody String name){
        return playerRepository.create(name);
    }
}
