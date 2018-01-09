create schema if not exists restaurants;

begin;

set schema 'restaurants';

create table if not exists restaurants (
    id serial primary key,
    name text not null,
    happy_hour text not null,
    happy_hour_deals text not null,
    location text null,
    menu text null,
    phone_number text null,

);

create table if not exists operation_hours (
    id serial primary key,
    restaurant int null references restaurants,
    hour_type int null references hour_type,
    sunday text null,
    monday text null,
    tuesday text null,
    wednesday text null,
    thursday text null,
    friday text null,
    saturday text null
);

create table if not exists hour_type (
    id serial primary key,
    description text null
)

commit;