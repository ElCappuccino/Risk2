package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

import beans.PlayerBean;

@Repository
public class PlayerRepositoryImpl implements PlayerRepository {
	@Resource
	private JdbcTemplate jt;

	@Override
	public List<PlayerBean> getAll() {
		String GET_ALL_PLAYERS = "select * from player";
		return jt.query(GET_ALL_PLAYERS, BeanPropertyRowMapper.newInstance(PlayerBean.class));
	}

	@Override
	public PlayerBean get(Long id) {
		String GET_PLAYER_BY_ID = "select * from player where id=?";
		return jt.queryForObject(GET_PLAYER_BY_ID, BeanPropertyRowMapper.newInstance(PlayerBean.class), id);
	}

	@Override
	public PlayerBean create(String name) {
		String CREATE_PLAYER = "insert into PLAYER (NAME, INITIAL) values (?, 0);";
		
		GeneratedKeyHolder holder = new GeneratedKeyHolder();
		jt.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				// TODO Génere une exception ici
				PreparedStatement ps = con.prepareStatement(CREATE_PLAYER, java.sql.Statement.RETURN_GENERATED_KEYS);
				ps.setString(1, name);
				return ps;
			}
		}, holder);
		
		return get(holder.getKey().longValue());
	}

	@Override
	public Boolean delete(Long id) {
		String DELETE_PLAYER = "delete from PLAYER where id = ?";
		return jt.execute(DELETE_PLAYER, new PreparedStatementCallback<Boolean>() {
			@Override
			public Boolean doInPreparedStatement(PreparedStatement ps) throws SQLException, DataAccessException {
				ps.setLong(1, id);
				return ps.execute();
			}
		});
	}

	@Override
	public void update(PlayerBean player) {

	}

}
