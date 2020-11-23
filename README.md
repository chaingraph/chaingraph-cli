# Chaingraph CLI

ChainGraph command line tool

## features

- App Generator.
- Add contracts table to ChainGraph.
- Execute cleos commands.

## Comandds 

__chaingraph create [project-name]

This command allows you quickly create scaffolds for applications and services including ReactJS(CRA), NextJS, ElectronJS, Expo, Vue, ChainGraph Satellites.  When you execute this command you are presented with a list 

__chaingraph [eos|proton|telos|...]. [cleos comands]__

These are shortcuts to interact with ChainGraph nodes `cleos -u https://eos.chaingraph.io [cleos command]`
Eg `chaingraph eos get info` ejecuta `cleos -u https://eos.chaingraph.io get info`

__chaingraph index { chain:'eos', contract: 'bitcashtests', scope: '',  code: ''  }__

This command allows you add a contract table to ChainGraph indexing service.

__chaingraph list__

Lists all 

__chaingraph login__

Just like vercel.

__chaingraph help__

Shows usage instructions.


## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.

## Blockmatic

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->






