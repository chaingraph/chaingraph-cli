# chaingraph-cli
ChainGraph command line tool

## features

- App Generator.
- Add contracts to ChainGraph
- Wrapped cleos


## Comandds 

__chaingraph create [project-name] --type=[chaingraph_template_code]__

este comando te permite crear scaffolds para CRA, NextJS, Electron, Expo, VueJS
cuando ejecutas el comando te presenta una lista para escoger.
estos scaffolds ya viene con apollo pegado a chaingraph

__chaingraph [eos|proton|telos|...]. [cleos comands]__

estos son shorcuts para `cleos -u https://eos.chaingraph.io [cleos command]`
instalar cleos es una dependencia para que este comando funcione

Ejemplo `chaingraph eos get info` ejecuta `cleos -u https://eos.chaingraph.io get info`

__chaingraph index { chain:'eos', contract: 'bitcashtests'  }__

este comando agrega un contrato a la lista de contatos indexados. un http api call

__chaingraph list__

lista todas las contratos indexados, detalle de tablas y acciones indexadas para la cuenta.

__chaingraph login__

tipo vercel.






