package repository;

import java.util.List;

import beans.PlayerBean;

public interface PlayerRepository {
    /**
     * Permet de récupérer tous les enregistrements de PlayerBean
     * @return Liste de Player
     */
	List<PlayerBean> getAll();
	
    /**
     * Permet de rechercher un PlayerBean à partir de son identifiant
     * @return PlayerBean
     */
	PlayerBean get(Long id);
	
    /**
     * Permet d'ajouter un nouvel enregistrement de PlayerBean
     * @param player
     */
    void create(PlayerBean player);
    
    /**
     * 
     * Permet de supprimer un PlayerBean
     * @param player
     */
    void delete(PlayerBean player);

    /**
     * Permet de mettre à jour un PlayerBean 
     * @param player
     */
    void update(PlayerBean player);
}
