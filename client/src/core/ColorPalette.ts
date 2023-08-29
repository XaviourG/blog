interface ColorsMap {
  [name: string]: string,
}

class Colors implements ColorsMap {
  static readonly TEXT = '#FFF7DC';
  static readonly BACKGROUND = '#590B0B';
  static readonly BACKGROUND_POP = '#7D1515';

  [colorName: string]: string;
}

export default Colors;
