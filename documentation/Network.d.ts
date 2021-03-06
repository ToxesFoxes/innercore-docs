/**
 * New module to work with client and server packets in multiplayer.
 */
declare namespace Network {
    /**
     * Event that is called when a client receives a packet with given name
     * @param name name of the packet
     */
    function addClientPacket(name: string, func: (packetData: object) => void): void;

    /**
     * Event that is called when server receives a packet with the specified name from client
     * @param name name of the packet
     */
    function addServerPacket(name: string, func: (client: any, data: object) => void): void;

    /**
     * Sends packet object with specified name to all clients
     */
    function sendToAllClients(name: string, packetData: object): void;

    /**
     * Sends packet object with the specified name from client to server
     */
    function sendToServer(name: string, packetData: object): void;

    /**
     * @returns Client object for player by player's entity id
     */
    function getClientForPlayer(player: number): NetworkClient;

    /**
     * Converts item or block id from server to local value
     */
    function serverToLocalId(id: string | number): number;

    /**
     * Converts item or block id from local to server value
     */
    function localToServerId(id: string | number): number;
}
