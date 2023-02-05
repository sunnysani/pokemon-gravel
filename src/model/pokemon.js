class Pokemon {
  constructor(
    id,
    name,
    imgUrl,
    types,
    weight,
    height,
    abilities,
    moves,
    stats
  ) {
    this.id = id;
    this.name = name;
    this.imgUrl =
      imgUrl ||
      "https://lh3.googleusercontent.com/Vo3Lue3TWDEglIHr678A3IHmTbjN_dN8O8vhq0ZECyCAO3bbQyygPwCG4v_iyvDPmSI=w2400";
    this.types = types;
    this.weight = weight;
    this.height = height;
    this.abilities = abilities;
    this.moves = moves;
    this.stats = stats;
  }
}

export default Pokemon;
