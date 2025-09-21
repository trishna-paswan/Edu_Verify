# certificates/blockchain.py
import hashlib
import time

class Block:
    def __init__(self, index, timestamp, data, previous_hash=''):
        self.index = index
        self.timestamp = timestamp
        self.data = data  # certificate hash
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        value = str(self.index) + str(self.timestamp) + self.data + self.previous_hash
        return hashlib.sha256(value.encode()).hexdigest()


class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]

    def create_genesis_block(self):
        return Block(0, time.time(), "Genesis Block", "0")

    def latest_block(self):
        return self.chain[-1]

    def add_block(self, data):
        block = Block(len(self.chain), time.time(), data, self.latest_block().hash)
        self.chain.append(block)
        return block

    def is_valid(self, data_hash):
        return any(block.data == data_hash for block in self.chain)


# global blockchain instance
blockchain = Blockchain()
