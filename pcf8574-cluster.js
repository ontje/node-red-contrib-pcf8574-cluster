module.exports = (RED) => {
  function ClusterOutNode(config) {
      RED.nodes.createNode(this, config);

      this.cluster = RED.nodes.getNode(config.cluster);

      this.warn(config.cluster);
      this.warn(this.cluster);

      if (this.cluster) {
        this.on('input', (msg) => {
          this.send(msg);
        });
      }
  }

  RED.nodes.registerType("cluster-out", ClusterOutNode);
};
