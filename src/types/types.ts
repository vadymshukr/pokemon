export interface NamedAPIResource {
  /** The name of the referenced resource */
  name: string
  /** The URL of the referenced resource */
  url: string
}

export interface NamedAPIResourceList {
  /** The total number of resources available from this API */
  count: number
  /** The URL for the next page in the list */
  next: string | null
  /** The URL for the previous page in the list */
  previous: string | null
  /** A list of named API resources */
  results: NamedAPIResource[]
}

export interface Pokemon {
  /** The identifier for this resource */
  id: number
  /** The name for this resource */
  name: string
  /** The base experience gained for defeating this Pokémon */
  base_experience: number
  /** The height of this Pokémon in decimetres */
  height: number
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number
  /** The weight of this Pokémon in hectograms */
  weight: number
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[]
  /** A list of forms this Pokémon can take on */
  forms: NamedAPIResource[]
  /** A list of game indices relevent to Pokémon item by generation */
  game_indices: VersionGameIndex[]
  /** A list of items this Pokémon may be holding when encountered */
  held_items: PokemonHeldItem[]
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[]
  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: PokemonSprites
  /** The species this Pokémon belongs to */
  species: NamedAPIResource
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[]
  /** A list of details showing types this Pokémon has */
  types: PokemonType[]
}

export interface PokemonAbility {
  /** Whether or not this is a hidden ability */
  is_hidden: boolean
  /** The slot this ability occupies in this Pokémon species */
  slot: number
  /** The ability the Pokémon may have */
  ability: NamedAPIResource
}

export interface PokemonType {
  /** The order the Pokémon's types are listed in */
  slot: number
  /** The type the referenced Pokémon has */
  type: NamedAPIResource
}

export interface PokemonHeldItem {
  /** The item the referenced Pokémon holds */
  item: NamedAPIResource
  /** The details of the different versions in which the item is held */
  version_details: PokemonHeldItemVersion[]
}

export interface PokemonStat {
  /** The stat the Pokémon has */
  stat: NamedAPIResource
  /** The effort points (EV) the Pokémon has in the stat */
  effort: number
  /** The base value of the stat */
  base_stat: number
}

export interface PokemonHeldItem {
  /** The item the referenced Pokémon holds */
  item: NamedAPIResource
  /** The details of the different versions in which the item is held */
  version_details: PokemonHeldItemVersion[]
}

export interface VersionGameIndex {
  /** The internal id of an API resource within game data */
  game_index: number
  /** The version relevent to this game index */
  version: NamedAPIResource
}

export interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string
  /** The shiny female depiction of this Pokémon from the front in battle */
  front_shiny_female: string
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string
}

export interface PokemonHeldItemVersion {
  /** The version in which the item is held */
  version: NamedAPIResource
  /** How often the item is held */
  rarity: number
}

export interface PokemonMove {
  /** The move the Pokémon can learn */
  move: NamedAPIResource
  /** The details of the version in which the Pokémon can learn the move */
  version_group_details: PokemonMoveVersion[]
}

export interface PokemonMoveVersion {
  /** The method by which the move is learned */
  move_learn_method: NamedAPIResource
  /** The version group in which the move is learned */
  version_group: NamedAPIResource
  /** The minimum level to learn the move */
  level_learned_at: number
}

export interface Type {
  /** The identifier for this resource */
  id: number
  /** The name for this resource */
  name: string
  /** A detail of how effective this type is toward others and vice versa */
  damage_relations: TypeRelations
  /** A list of game indices relevent to this item by generation */
  game_indices: GenerationGameIndex[]
  /** The generation this type was introduced in */
  generation: NamedAPIResource
  /** The class of damage inflicted by this type */
  move_damage_class: NamedAPIResource
  /** The name of this resource listed in different languages */
  names: Name[]
  /** A list of details of Pokémon that have this type */
  pokemon: TypePokemon[]
  /** A list of moves that have this type */
  moves: NamedAPIResource[]
}

export interface TypeRelations {
  /** A list of types this type has no effect on */
  no_damage_to: NamedAPIResource[]
  /** A list of types this type is not very effect against */
  half_damage_to: NamedAPIResource[]
  /** A list of types this type is very effect against */
  double_damage_to: NamedAPIResource[]
  /** A list of types that have no effect on this type */
  no_damage_from: NamedAPIResource[]
  /** A list of types that are not very effective against this type */
  half_damage_from: NamedAPIResource[]
  /** A list of types that are very effective against this type */
  double_damage_from: NamedAPIResource[]
}

export interface TypePokemon {
  /** The order the Pokémon's types are listed in */
  slot: number
  /** The Pokémon that has the referenced type */
  pokemon: NamedAPIResource
}

export interface GenerationGameIndex {
  /** The internal id of an API resource within game data */
  game_index: number
  /** The generation relevent to this game index */
  generation: NamedAPIResource
}

export interface Name {
  /** The localized name for an API resource in a specific language */
  name: string
  /** The language this name is in */
  language: NamedAPIResource
}
