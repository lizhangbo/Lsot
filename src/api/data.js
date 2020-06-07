/**
 * 模拟数据
 */
const _title1 =[
    {title:'序号',key:'seqNo'},
    {title:'题目',key:'question',sortType: 'normal'},
    {title:'通过率',key:'passRate'},
    {title:'难度',key:'difficulty'}
]
const _table1 =[
    {seqNo: '1',question: 'HashMap底层执行原理',passRate: '10%',difficulty:'简单'},
    {seqNo: '2',question: 'Hashtable和ConcurrentHashMap如何实现线程安全？',passRate: '10%',difficulty:'简单'},
    {seqNo: '3',question: 'JVM的内存布局和垃圾回收机制',passRate: '10%',difficulty:'一般'},
    {seqNo: '4',question: '类加载机制和双亲委派模型',passRate: '10%',difficulty:'一般'},
    {seqNo: '5',question: '阐述事务的隔离级别和传播属性',passRate: '10%',difficulty:'一般'},
    {seqNo: '6',question: '高并发下，如何做到安全的修改同一行数据',passRate: '10%',difficulty:'困难'},
    {seqNo: '7',question: 'A服务调用B服务多接口，响应时间最短方案',passRate: '10%',difficulty:'困难'},
    {seqNo: '8',question: '动态代理的几种实现方式及优缺点',passRate: '10%',difficulty:'一般'},
    {seqNo: '9',question: '按线程池内部机制，当提交新任务时需要考虑写什么？',passRate: '10%',difficulty:'一般'},
    {seqNo: '10',question: 'Transactional标签',passRate: '10%',difficulty:'一般'},
]


export default {
    findTitle(data){
        setTimeout(data(_title1),100);
    },
    findTableData(data){
        setTimeout(data(_table1),100);
    }
}