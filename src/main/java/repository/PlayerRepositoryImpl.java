package repository;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import beans.PlayerBean;

@Repository
public class PlayerRepositoryImpl implements PlayerRepository{
    @Resource
    private JdbcTemplate jt;
    
	@Override
	public List<PlayerBean> getAll() {
	    String GET_ALL_PLAYERS = "select * from player";
	    return jt.query(GET_ALL_PLAYERS, BeanPropertyRowMapper.newInstance(PlayerBean.class));
	}
	
	@Override
	public PlayerBean get(Long id) {
      String GET_PLAYER_BY_ID = "select * from player where player_id=?";
      return  jt.queryForObject(GET_PLAYER_BY_ID, BeanPropertyRowMapper.newInstance(PlayerBean.class), id) ;
	}

	@Override
	public void create(PlayerBean player) {
		//String INSERT_PLAYER = "";
	    //jt.queryForObject(INSERT_PLAYER, BeanPropertyRowMapper.newInstance(PlayerBean.class)) ;
	}

	@Override
	public void delete(PlayerBean player) {
		//String DELETE_PLAYER = "";
	    //jt.queryForObject(DELETE_PLAYER, BeanPropertyRowMapper.newInstance(PlayerBean.class), player.getId) ;
	}

	@Override
	public void update(PlayerBean player) {
		
	}



}
