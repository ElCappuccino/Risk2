drop table PLAYER if exists;
create table PLAYER (
    ID by default as identity (start with 1), 
    NAME     varchar(145),
    primary key (ID)
);

drop table MAP if exists;
create table MAP (
    ID by default as identity (start with 1), 
    NAME     varchar(145),
    URL     varchar(500),
    primary key (ID)
);